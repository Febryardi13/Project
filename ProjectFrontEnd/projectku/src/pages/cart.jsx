import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Table } from "reactstrap";
import Modal from '../components/modal'
import { FaRegWindowMinimize } from "react-icons/fa";
import Axios from 'axios'
import { APIURL, APIURLimage } from '../helper/apiurl'
import { Link, Redirect } from 'react-router-dom'
import { cartProduk, deleteCart } from '../redux/actions'
import NumberFormat from "react-number-format";



const Cart = () => {
  const getCart = useSelector(state => state.cartReducers.Cart)
  const UserIdRedux = useSelector(state => state.auth.id)
  const totalHarga = useSelector(state => state.cartReducers.dataTotalHarga)
  const Cart = useSelector(state => state.cartReducers.Cart)
  const roleid = useSelector(state => state.auth.roleid)
  const loading = useSelector(state => state.auth.loading)
  // const { loading } = useSelector(state => state.cartReducers)

  const dispatch = useDispatch()

  const [modalDelete, setModalDelete] = useState(false)
  const [idDelete, setIdDelete] = useState(0)
  // const [loading, setloading] = useState(true)
  const [redirectCheckout, setRedirectChekout] = useState(false)


  const openToggleDelete = index => {
    setModalDelete(!modalDelete)
    setIdDelete(index)
  }

  const deleteData = () => {
    dispatch(deleteCart(idDelete, UserIdRedux))
    setModalDelete(!modalDelete)
  }

  const onCheckout = () => {
    for (var e = 0; e < Cart.length; e++) {
      var data = {
        id: Cart[e].id,
        userid: Cart[e].userid,
        productid: Cart[e].productid,
        harga: Cart[e].harga,
        jumlah: Cart[e].jumlah,
        total: Cart[e].total,
        status: 'checkout'
      }
      console.log(data)
      var UserIdRedux = data.id
      Axios.put(`${APIURL}auth/checkoutCart/${UserIdRedux}`, { data })
        .then(res => {
          dispatch(cartProduk())
        })
        .catch(err => {
          console.log(err)
        })
    }
    setRedirectChekout(true)
  }



  if (getCart.length === 0) {
    return (
      <div style={{ marginBottom: "150px" }}>
        <div style={{ width: "100%", height: "20pc", backgroundColor: "#eaeaea" }} />
        <div style={{ display: "column" }}>
          <h2
            className="CardTextHeader"
            style={{
              zIndex: "2",
              position: "absolute",
              top: "200px",
              left: "5px",
              width: "50px",
              height: "100px"
            }}>
            CART
        </h2>
          <FaRegWindowMinimize className='stripCart' />
        </div>
        <p style={{ marginLeft: "100px", marginTop: "50px", fontFamily: "Poppins", fontWeight: "bolder" }}>Your cart is currently empty </p>
        <Link to='/menuroadbike'>
          <button style={{ marginLeft: "100px", backgroundColor: "#43454b", color: "white", fontFamily: "Poppins", fontWeight: "Sans Serif", height: "40px", fontWeight: "bolder", border: "1px solid", fontSize: "15px" }}>Return to Shop</button>
        </Link>
      </div >
    )
  }


  const renderCart = () => {
    if (getCart !== null) {
      return getCart.map((val, index) => {
        return (
          <tr key={index}>
            <td><img src={APIURLimage + val.gambar} style={{ width: "100px" }} /></td>
            <td style={{ marginTop: "270px" }}>{val.produk}</td>
            <td><NumberFormat value={val.harga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} className="CardTextPrice" /></td>
            <td>{val.ukuranproduk}</td>
            <td>{val.jumlah}</td>
            <td><NumberFormat value={val.total} displayType={"text"} thousandSeparator={true} prefix={"Rp."} className="CardTextPrice" /></td>
            <td><button style={{ border: "1px solid", borderRadius: "2px" }} onClick={() => openToggleDelete(val.id)}>Hapus</button></td>
          </tr>
        )
      })
    }
  }

  if (redirectCheckout === true) {
    return <Redirect to={'/cart/checkout'} />
  }

  if (loading) {
    return <div>Loading</div>
  }

  return (
    <div>
      <div style={{ width: "100%", height: "20pc", backgroundColor: "#eaeaea" }} />
      <div style={{ display: "column" }}>
        <h2
          className="CardTextHeader"
          style={{
            zIndex: "2",
            position: "absolute",
            top: "200px",
            left: "5px",
            width: "50px",
            height: "100px"
          }}>
          CART
          </h2>
        <FaRegWindowMinimize className='stripCart' />
      </div>
      <div style={{ marginTop: "60px" }}>
        <Fragment>
          <Modal title={'Hapus Cart'} toggle={openToggleDelete} modal={modalDelete} actionfunc={deleteData} btnTitle="delete">Hapus Produk Ini ?</Modal>
          <Table className="container">
            <thead>
              <tr >
                <th></th>
                <th style={{ fontFamily: "Roboto", color: "#535353" }}>PRODUK</th>
                <th style={{ fontFamily: "Roboto", color: "#535353" }}>HARGA</th>
                <th style={{ fontFamily: "Roboto", color: "#535353" }}>UKURAN</th>
                <th style={{ fontFamily: "Roboto", color: "#535353" }}>JUMLAH</th>
                <th style={{ fontFamily: "Roboto", color: "#535353" }}>TOTAL</th>
                <th style={{ fontFamily: "Roboto", color: "#535353" }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {renderCart()}
            </tbody>
          </Table>
        </Fragment>

        <div className="tableCheckout">
          &nbsp;
          <div className="Text-Checkout-2">
            <h5 className="Text-Checkout-h7">SUBTOTAL  :</h5>
            <h6 style={{ marginTop: "3px", marginLeft: "10px" }} >
              <NumberFormat value={totalHarga} displayType={"text"} thousandSeparator={true} prefix={"Rp."} />
            </h6>
          </div>
          <div>

            <button onClick={onCheckout} className="button-Checkout">PROCEED TO CHECKOUT -></button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

