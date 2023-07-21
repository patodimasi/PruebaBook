import React from 'react';
import './App.css';


function App() {
  return (
    <div className="layout">
        <header className="header">  
        <div style={{ marginLeft: '10px' }}>    
            <img src={require('./images/book.png')} className='libroimg' alt='logoboook' />
            <h1 className="titulo">Book Store</h1>
        </div>
        </header> 
        <div className="panelnav with-nav-tabs panel-primary">
            <div className="panel-heading">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#home">Consultas</a></li>
                    <li ><a data-toggle="tab" href="#tab1primary">Stock</a></li>
                    <li><a data-toggle="tab" href="#tab2primary">Venta</a></li>
                    <li><a data-toggle="tab" href="#tab3primary">Clientes</a></li>
                    <li><a data-toggle="tab" href="#tab4primary">Usuarios</a></li>
                    <li><a data-toggle="tab" href="#tab5primary">Sistema</a></li>
                </ul>
            </div> 
            <div className="panel-body">
                <div className="tab-content">
                    <div className="tab-pane fade active in" id="home">
                        <div className="imagen_nav">
                            <div className="center_image">
                                <button type="button">  
                                    <img src={require('./images/search.png')} alt="imagen_search"  className="each_imagen_nav"></img>
                                </button>
                                <p><strong>Libros</strong></p>
                            </div>
                            <div className="center_image">
                                <button type="button">  
                                    <img src={require('./images/users.png')} alt="imagen_users" className="each_imagen_nav"></img>
                                </button>
                                <p><strong>Usuarios</strong></p>
                            </div>  
                            <div className="center_image">
                                <button type="button">  
                                    <img src={require('./images/stock.png')} alt="imagen_stock" className="each_imagen_nav"></img>
                                </button>
                                <p><strong>Stock</strong></p>
                            </div>    
                            <div className="center_image">
                                <button type="button">  
                                    <img src={require('./images/customer.png')} alt="Imagen_customer" className="each_imagen_nav"></img>
                                </button>
                                <p><strong>Clientes</strong></p>
                            </div>  
                            <div className="center_image">
                                <button type="button">  
                                    <img src={require('./images/sale.png')} alt="imagen_sale" className="each_imagen_nav"></img>
                                </button>
                                <p><strong>Ventas</strong></p>
                            </div>      

                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab1primary">Primary 1</div>
                    <div className="tab-pane fade" id="tab2primary">Primary 2</div>
                    <div className="tab-pane fade" id="tab3primary">Primary 3</div>
                </div>
            </div>   
        </div>    
         {/*Contenido principal*/}
        <section className="content">
            
        </section>
    
            {/*Pie de pagina*/}
        <footer className="footer">
            &copy; Boherdi Electronica SRL
        </footer>
    </div>
  );
}

export default App;
