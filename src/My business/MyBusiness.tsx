import { UseAuthContext } from "../context/UseAuthContext";
import { useQuery } from "@tanstack/react-query";
import { Business, User } from "../types";
import { Loading } from "../shared/Loading";
import { FlatButton } from "../shared/FlatButton";

 const fetchBusiness = async (user?:User):Promise<Business>=>{

            const res = await fetch (`https://modernbusinesslistserver.vercel.app/user/mybusiness`,{
                headers:{
                    'Authorization':`Bearer ${user?.token}`,
                }
            });
            const json = await res.json()
            if(!res.ok){
                console.log(json);
                throw Error('error fetching data');
            }
            return json;

       
    }
export const MyBusiness = ()=>{
    const {user} = UseAuthContext();
   
    const { data, isLoading, isError, error } = useQuery<Business>({
    queryKey: ["myBusiness", user?.token],
    queryFn: () => {
        if (!user) throw new Error("User not available");
        return fetchBusiness(user);
    },
    enabled: !!user,
    });

     // ================= STATES =================
      if (isLoading) return <Loading />;
    
      if (isError) {
        return (
          <div className="container-fluid">
            <p style={{ color: 'red' }}>
              {(error as Error).message || "Error loading business"}
            </p>
          </div>
        );
      }
      if (!data) {
    return (
      <section>
        <div className="container-fluid">
        <FlatButton title="create your business"/>
      </div>
      </section>
      
    );
  }
    return(
        <section>
            <div className="container-fluid">
                <h2>{data.name}</h2>

            </div>
        </section>
    )
}