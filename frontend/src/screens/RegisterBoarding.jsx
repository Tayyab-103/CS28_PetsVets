import axios from "axios"
import React, { useState, useRef } from "react"
// import { Link } from "react-router-dom"
import { Form, Button, Card, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components2/Message"
import Loader from "../components2/Loader"
import FormContainer from "../components2/FormContainer"
// import { listBlogDetails, updateBlog } from "../actions/blogActions"
// import { BLOG_UPDATE_RESET } from "../constants/blogConstants"
import emailjs from '@emailjs/browser';

const RegisterBoarding = ({ match, history }) => {
    const blogId = match.params.id
    const formRef = useRef()

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [cnic, setcnic] = useState("")
    const [city, setcity] = useState("")
    const [experience, setexperience] = useState("")
    //   const [brand, setBrand] = useState('')
    //   const [category, setCategory] = useState('')
    //   const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState("")
    const [care, setCare] = useState("")
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const blogDetails = useSelector((state) => state.blogDetails)
    const { loading, error, blog } = blogDetails

    const blogUpdate = useSelector((state) => state.blogUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = blogUpdate

    // useEffect(() => {
    //     if (successUpdate) {
    //         dispatch({ type: BLOG_UPDATE_RESET })
    //         history.push("/admin/bloglist")
    //     } else {
    //         if (!blog.name || blog._id !== blogId) {
    //             dispatch(listBlogDetails(blogId))
    //         } else {
    //             setName(blog.name)
    //             // setPrice(blog.price)
    //             setImage(blog.image)
    //             setcnic(blog.cnic)
    //             setcity(blog.city)
    //             setexperience(blog.experience)
    //             // setBrand(blog.brand)
    //             // setCategory(blog.category)
    //             // setCountInStock(blog.countInStock)
    //             setDescription(blog.description)
    //             // setCare(blog.care)
    //             console.log(blog)
    //         }
    //     }
    // }, [dispatch, history, blogId, blog, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("image", file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }

            const { data } = await axios.post("/api/upload", formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const res = await axios.post("http://localhost:3000/api/blogs/boarding", { name, image, description, city, cnic, experience })
        localStorage.setItem("boarding", JSON.stringify(res))

        emailjs.sendForm('service_vp8wkp9', 'template_exqgalq', formRef.current, '2FNwtA1ahticn1IVH')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        history.push('/')

    }

    return (
        <>

            <FormContainer>
                <h1 style={{ textAlign: "center" }}>Add Boarding</h1>
                <Col md={10} style={{ marginLeft: "50px" }}>
                    <Card>
                        {loadingUpdate && <Loader />}
                        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
                        {loading ? (
                            <Loader />
                        ) : error ? (
                            <Message variant="danger">{error}</Message>
                        ) : (
                            <Form onSubmit={submitHandler} ref={formRef}>
                                <Form.Group controlId="name" style={{ margin: 10 }}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        type="name"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value.replace(/[^\w\s]/gi, ""))
                                        }
                                        required
                                    ></Form.Control>
                                    <Form.Label>CNIC</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter CNIC"
                                        value={cnic}
                                        onChange={(e) =>
                                            setcnic(e.target.value.replace(/[^\w\s]/gi, ""))
                                        }
                                        required
                                    ></Form.Control>
                                    <Form.Label>CITY</Form.Label>
                                    <Form.Control
                                        name="city"

                                        type="text"
                                        placeholder="Enter City"
                                        value={city}
                                        onChange={(e) =>
                                            setcity(e.target.value.replace(/[^\w\s]/gi, ""))
                                        }
                                        required
                                    ></Form.Control>
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Your Experience"
                                        value={experience}
                                        onChange={(e) =>
                                            setexperience(e.target.value.replace(/[^\w\s]/gi, ""))
                                        }
                                        required
                                    ></Form.Control>
                                </Form.Group>

                                {/* <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

                                <Form.Group controlId="image" style={{ margin: 10 }}>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image url"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    ></Form.Control>
                                    <Form.File
                                        id="image-file"
                                        label="Choose File"
                                        custom
                                        onChange={uploadFileHandler}
                                    ></Form.File>
                                    {uploading && <Loader />}
                                </Form.Group>

                                {/* <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

                                <Form.Group controlId="description" style={{ margin: 10 }}>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        name="description"
                                        type="text"
                                        placeholder="Enter description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></Form.Control>
                                </Form.Group>

                                {/* <Form.Group controlId='care'>
              <Form.Label>Care</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter care routine'
                value={care}
                onChange={(e) => setCare(e.target.value)}
              ></Form.Control>
            </Form.Group> */}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    style={{ backgroundColor: "#1eb2a6", marginLeft: 150 }}
                                >
                                    Add
                                </Button>
                            </Form>
                        )}
                    </Card>
                </Col>
            </FormContainer>
        </>
    )
}

export default RegisterBoarding
