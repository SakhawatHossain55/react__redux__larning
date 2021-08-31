import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { Col } from "react-bootstrap";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <Col>
      <div md={6} className={styles.product}>
        <img
          className={styles.product__image}
          src={product.image}
          alt={product.title}
        />

        <div className={styles.product__details}>
          <p className={styles.details__title}>{product.title}</p>
          <p className={styles.details__price}>$ {product.price}</p>
        </div>

        <div className={`${styles.product__buttons}`}>
          <Link to={`/product/${product.id}`}>
            <button
              onClick={() => loadCurrentItem(product)}
              className={`${styles.buttons__btn} ${styles.buttons__view} mb-3`}
            >
              View Item
            </button>
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
