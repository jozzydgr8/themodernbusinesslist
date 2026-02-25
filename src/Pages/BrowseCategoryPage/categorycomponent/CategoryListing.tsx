import { NavLink } from "react-router-dom"
import { UseDataContext } from "../../../context/UseDataContext"

export const CategoryListing = ()=>{
    const {businessCategory} = UseDataContext()
    return(
        <section id='category-listing'>
            <div className="container-fluid">
                {
                    businessCategory?.map(cat=>(
                        <div key={cat._id}>
                            <h3>{cat.name}</h3>
                            <div className="row">
                                {
                                cat.subCategories.map(sub=>(
                                    <NavLink to={'/'} className="col-md-4 col-sm-6 col-xs-12" key={sub._id}>
                                        <div className='container-listing'>
                                        <div>{sub.name}</div>
                                        <div className="container-listing-count">
                                            <div>
                                                {sub.businessCount}
                                            </div>
                                        </div>
                                        </div>
                                    </NavLink>
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