import "../assets/css/pagescss/AddProduct.css";
import categories from "../utils/category-list";
import conditionOptions from "../utils/conditions-options";
import { useState, useContext } from "react";
import { sendProduct } from "../api/send-product";
import { AuthContext } from "../contexts/auth-context.jsx";
import { uploadImage } from "../api/upload-image";
import { DragAndDropUpload } from "../components/DragAndDropUpload";
import "../assets/css/pagescss/AddProduct.css";
import { Footer } from "../components/Footer";
import { Categories } from "../components/Categories";

export function AddProduct() {
  const [payload, setPayload] = useState({
    name: "",
    description: "",
    estimated_price: "",
    item_condition: "",
    status: "available",
    category_id: "",
  });

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFiles = (files) => {
    setSelectedFiles(files);
  };

  const removeFile = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const { currentUser, token } = useContext(AuthContext);

  if (!currentUser) {
    return null; // or return a loading spinner
  }

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await sendProduct(payload, token);
      if (response.success) {
        const itemId = response.data.itemId;
        for (let file of selectedFiles) {
          await uploadImage(itemId, file, token);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Categories />
      <div className="AddProduct-page">
        <div className="form-container">
          <h1 className="title">Fill in the info for a new Product</h1>

          <form onSubmit={onSubmit} className="product-form">
            <div className="form-right">
              <DragAndDropUpload
                handleFiles={handleFiles}
                className="drag-drop"
              />
              <div className="preview">
                {selectedFiles.length > 0 &&
                  Array.from(selectedFiles).map((file, index) => (
                    <div key={index} className="image-preview">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`uploaded-${index}`}
                        className="preview-img"
                      />
                      <button
                        onClick={() => removeFile(index)}
                        className="remove-btn"
                      >
                        X
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="form-left">
              <div className="form-group">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                  className="form-input"
                  onChange={(evt) =>
                    setPayload({
                      ...payload,
                      name: evt.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="estimated_price"></label>
                <input
                  type="number"
                  name="estimated_price"
                  id="estimated_price"
                  placeholder="Estimated Price"
                  min="0"
                  step="0.01"
                  className="form-input"
                  onChange={(evt) => {
                    let val = evt.target.value;
                    if (val < 0) val = 0;
                    setPayload({
                      ...payload,
                      estimated_price: val,
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description"></label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Product Description"
                  className="form-input-description"
                  cols="40"
                  rows="6"
                  onChange={(evt) =>
                    setPayload({
                      ...payload,
                      description: evt.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label className="labelItem" htmlFor="item_condition">
                  Condition
                </label>
                <select
                  id="item_condition"
                  value={payload.item_condition}
                  className="form-input"
                  onChange={(evt) =>
                    setPayload({
                      ...payload,
                      item_condition: evt.target.value,
                    })
                  }
                >
                  <option value="">--Please choose an option--</option>
                  {conditionOptions.map((condition, index) => (
                    <option key={index} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="labelCategory" htmlFor="category_id">
                  Category
                </label>
                <select
                  id="category_id"
                  value={payload.category_id}
                  className="form-input"
                  onChange={(evt) =>
                    setPayload({
                      ...payload,
                      category_id: evt.target.value,
                    })
                  }
                >
                  <option value="">--Please choose an option--</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">
            Upload
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
