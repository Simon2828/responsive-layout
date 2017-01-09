import React, {Component} from 'react';
import '../Product.css';

const Product = function() {
    return (
        <div className="container-fluid">
            <div className="product row">
                <div className="carousel slide article-slide col-sm-8" id="article-photo-carousel">
                    <div className="carousel-inner cont-slider">
                        <div className="item active">
                            <img alt="" title="" src="https://unsplash.it/1400/600?image=114"/>
                        </div>
                        <div className="item">
                            <img alt="" title="" src="https://unsplash.it/1400/600?image=705"/>
                        </div>
                        <div className="item">
                            <img alt="" title="" src="https://unsplash.it/1400/600?image=315"/>
                        </div>
                        <div className="item">
                            <img alt="" title="" src="https://unsplash.it/1400/600?image=622"/>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#article-photo-carousel" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">previous</span>
                    </a>
                    <a className="right carousel-control" href="#article-photo-carousel" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">next</span>
                    </a>

                    <ol className="carousel-indicators">
                        <li className="active" data-slide-to="0" data-target="#article-photo-carousel">
                            <img className="carousel-image first-image" alt="clouds" src="https://unsplash.it/1400/600?image=114"/>
                        </li>
                        <li className="" data-slide-to="1" data-target="#article-photo-carousel">
                            <img className="carousel-image" alt="bird and clouds" src="https://unsplash.it/1400/600?image=705"/>
                        </li>
                        <li className="" data-slide-to="2" data-target="#article-photo-carousel">
                            <img className="carousel-image" alt="plants on building" src="https://unsplash.it/1400/600?image=315"/>
                        </li>
                        <li className="" data-slide-to="3" data-target="#article-photo-carousel">
                            <img className="carousel-image last-image" alt="buildings and sea" src="https://unsplash.it/1400/600?image=622"/>
                        </li>
                    </ol>
                </div>

                <div className="product-title col-xs-12 col-sm-4">
                    <p>Cimasic Rimte</p>
                    <div className="layout-line"></div>
                    <h1>product title</h1>
                    <p>$899</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nostrum neque dolores saepe quam</p>
                    <p>View details</p>
                </div>
            </div>

            <div className="page-layout">
                <div className="page-layout_block col-sm-5"></div>
                <div className="page-layout_text col-sm-5">
                    <h4>page layout example</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, vitae dolore repellendus tempora nulla voluptatibus saepe perferendis voluptatem, nobis obcaecati quis hic id unde mollitia facere commodi minus repellat eum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque distinctio aliquam quia perferendis sapiente labore sed qui ipsa dolore blanditiis sint velit, adipisci laborum fugiat, deleniti, suscipit. Vitae, similique!</p>
                    <div role="group">
                        <button type="button">View our range</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
