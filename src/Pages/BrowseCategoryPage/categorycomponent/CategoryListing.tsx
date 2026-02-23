import { UseDataContext } from "../../../context/UseDataContext"

export const CategoryListing = ()=>{
    const {businessCategory} = UseDataContext()
    return(
        <section>
            <div className="container-fluid">
                {
                    businessCategory?.map(cat=>(
                        <div key={cat._id}>
                            <h3>{cat.name}</h3>
                            <div className="row">
                                {
                                cat.subCategories.map(sub=>(
                                    <div className="col-md-4" key={sub._id}>
                                        <div>
                                        <div>{sub.name}</div>
                                        <div>{sub.businessCount}</div>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </section>
    )
}