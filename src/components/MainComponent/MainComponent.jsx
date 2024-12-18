
// Creiamo una funzione / componente con un return che include la logica e la struttura html della pagina.
// Utilizziamo un export inline su una costante inizializzata ad una funzione anonima.
export const MainComponent = ({ data }) => {

    const dataCopy = [...data]
    const newElement = dataCopy.map((element) => {
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





    return (

        <main className="d-flex" >
            <div className="formContainer">
                <form className="p-5 bg-white rounded-3 m-4">
                    <div className="form-group">
                        <label htmlFor="titleForm"><span className="fw-bold">Card&apos;s Name</span></label>
                        <input type="text" value="" className="form-control" id="titleForm" placeholder="Es: React Components" />
                        <label htmlFor="imageForm"><span className="fw-bold">Card&apos;s Images</span></label>
                        <input type="file" value="" className="form-control" id="imageForm" />
                        <label htmlFor="contentForm"><span className="fw-bold">Card&apos;s Content</span></label>
                        <input type="text" value="" className="form-control" id="contentForm" placeholder="Es: Text of the arguments" />
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
