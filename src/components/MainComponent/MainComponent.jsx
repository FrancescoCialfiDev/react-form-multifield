// Importiamo lo useState di React
import { useState } from "react"

// Creiamo una funzione / componente con un return che include la logica e la struttura html della pagina.
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima.
export const MainComponent = ({ data }) => {

    // Copia dell'array "data" passato come prop.
    const [reactData, setReactData] = useState(data) // Creaimo una variabile reattiva inizializzata al valore di dataCopy

    // Creiamo una costante per generare tutte le card dell0array e lavoriamo sulla variabile reattiva.
    const newElement = reactData.map((element) => {
        return (
            element.published && (
                <div className="col-xl-3 col-md-4 col-sm-6" key={element.id}>
                    <div className="card">
                        <img src={element.image} className="card-img-top" alt={element.title} />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.content}</p>
                            <a href="#" className="btn btn-primary">Show Details</a>
                            <button type="button" className="btn btn-danger mx-1">Delete</button>
                        </div>
                    </div>
                </div>
            )
        )
    })

    // State of variables
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [content, setContent] = useState("")

    // Submit function 
    const submitFunction = (event) => {
        event.preventDefault()
        alert("The card has been generated")

        const newCardModel = {

            id: 1,
            title: title,
            image: image,
            content: content,
            published: true,

        }

        const newCard = [...reactData, newCardModel]
        setReactData(newCard)
    }

    // Function for change Input
    const changeTitle = (event) => {
        setTitle(event.target.value)
    }
    const selectImage = (event) => {
        setImage(event.target.value)
    }
    const changeContent = (event) => {
        setContent(event.target.value)
    }




    return (

        <main className="d-flex" >
            <div className="formContainer">
                <form className="p-5 bg-white rounded-3 m-4" onSubmit={submitFunction}>
                    <div className="form-group">
                        <label htmlFor="titleForm"><span className="fw-bold">Card&apos;s Name</span></label>
                        <input type="text" value={title} className="form-control" id="titleForm" placeholder="Es: React Components" onChange={changeTitle} />
                        <label htmlFor="imageForm"><span className="fw-bold">Card&apos;s Images</span></label>
                        <input type="file" value={image} className="form-control" id="imageForm" onChange={selectImage} />
                        <label htmlFor="contentForm"><span className="fw-bold">Card&apos;s Content</span></label>
                        <input type="text" value={content} className="form-control" id="contentForm" placeholder="Es: Text of the content" onChange={changeContent} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {newElement}
                </div>
            </div>
        </main >

    )

}
