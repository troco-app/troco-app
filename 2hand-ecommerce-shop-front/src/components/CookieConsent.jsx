import { useEffect } from "react";

import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsent() {
    useEffect(() => {

        if (!document.getElementById('cc--main')) {
            window.CookieConsentApi = window.initCookieConsent();
            window.CookieConsentApi.run({
                autorun : true,					
                delay : 0,
                current_lang : 'es',
                autoclear_cookies : true,	
                cookie_expiration : 365,
                cookie_domain: import.meta.env.VITE_COOKIE_DOMAIN,
                gui_options : {
                  consent_modal : {
                      layout : 'cloud',
                      position : 'bottom',
                      transition : 'slide'
                  },
                  settings_modal : {
                      layout : 'bar',
                      transition : 'slide',
                      position : 'right'
                  }
                },
                languages : {
                    es : {	
                        consent_modal : {
                            title :  "Sí, nosotros también usamos cookies",
                            description :  '<strong>Troco</strong> usa cookies para asegurar el correcto funcionamiento del portal, así como entender qué uso le das para poder mejorar constantemente nuestros servicios. Esto último sólo se hará si das tu consentimiento. <a aria-label="Política de cookies" class="cc-link" href="#" target="_blank">Leer más</a>',
                            primary_btn: {
                                text: 'Aceptar todo',
                                role: 'accept_all'
                            },
                            secondary_btn: {
                                text : 'Configuración',
                                role : 'settings'
                            }
                        },
                        settings_modal : {
                            title : 'Configuración de las cookies',
                            save_settings_btn : "Guardar configuración",
                            accept_all_btn : "Aceptar todas",
                            cookie_table_headers : [
                                {col1: "Nombre" }, 
                                {col2: "Dominio" }, 
                                {col3: "Expira" }, 
                                {col4: "Uso de cookie" }
                            ],
                            blocks : [
                                {
                                    title : "Uso de cookies",
                                    description: 'Se utilizan cookies para asegurar las funcionalidades básicas del sitio y para mejorar la experiencia online. Puedes seleccionar qué cookies según categoría.'
                                },{
                                    title : "Cookies estrictamente necesarias",
                                    description: 'Estas cookies son necesarias. El portal no funcionaría correctamente sin ellas.',
                                    toggle : {
                                        value : 'necessary_cookies',
                                        enabled : true,
                                        readonly: true
                                    },
                                    cookie_table: [
                                        {
                                            col1: '__stripe_mid',
                                            col2: 'Terceros',
                                            col3: '1 año',
                                            col4: 'Mejorar la experiencia visual del usuario.'
                                        },
                                        {
                                            col1: '__stripe_sid',
                                            col2: 'Terceros',
                                            col3: '30 minutos',
                                            col4: 'Mejorar la experiencia visual del usuario.'
                                        },
                                        {
                                            col1: 'troco_session',
                                            col2: 'Propia',
                                            col3: '2 horas',
                                            col4: 'Idenficar la sesión de un usuario en particular en el sistema.'
                                        },
                                        {
                                            col1: '_fbp',
                                            col2: 'Terceros',
                                            col3: '-',
                                            col4: 'Cookie de Facebook utilizadas para recoger estadísticas sobre las visitas al sitio y el rendimiento de las campañas publicitarias.'
                                        }
                                    ]
                                },{
                                    title : "Cookies analíticas",
                                    description: 'Estas cookies nos permiten saber cómo se usa el portal y qué páginas has visitado. Todos los datos son anónimos: no podemos usarlos para identificarte personalmente.',
                                    toggle : {
                                        value : 'analytics_cookies',
                                        enabled : false,
                                        readonly: false
                                    },
                                    cookie_table: [
                                        {
                                            col1: '_ga',
                                            col2: 'Terceros',
                                            col3: '2 años',
                                            col4: 'Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.'
                                        },
                                        {
                                            col1: 'ga*',
                                            col2: 'Terceros',
                                            col3: '2 años',
                                            col4: 'Conserva el estado de la sesión.'
                                        },
                                        {
                                            col1: '_gid',
                                            col2: 'Terceros',
                                            col3: '1 day',
                                            col4: 'Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
              }
                
            );
        }

    }, []);

    return null;
}