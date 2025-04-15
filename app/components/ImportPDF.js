
const ImportPDF = () => { 
    return (
        
            <div className="form-wrapper">
            <h2>Import File</h2>
            <form className="grid-sm">
                <div className="grid-xs">

                    <label>Select File</label>
                    <input 
                        type="file" 
                        accept=".jpg, .jpeg, .pdf, .png"
                    />
                    {/* <input type="hidden" name="_action" value="uploadFile"/> */}
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn--primary"
                >Upload</button>
            </form>
        </div>
        
    )
}

export default ImportPDF