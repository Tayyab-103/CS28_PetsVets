import React, { useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import { listOrders } from "../actions/orderActions"
import axios from "axios"

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push("/login")
    }
  }, [dispatch, history, userInfo])

  const delOrder = async (id) => {
    const choice = window.confirm("Are you sure?")
    if (choice) {
      await axios.delete(`http://localhost:5000/api/orders/${id}`)
      window.location.reload();
    }
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table variant="outline-success" className="table-sm table-bordered">
          <thead style={{ backgroundColor: "#1eb2a6" }}>
            <tr style={{ color: "#FFFFFF" }}>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>DELIVERED</th>
              <th>REMOVE</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>Rs.{order.totalPrice}</td>
                {/* <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td> */}
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td><i className="fas fa-times" onClick={() => delOrder(order._id)} style={{ color: "red", cursor: "pointer" }}></i></td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default OrderListScreen
