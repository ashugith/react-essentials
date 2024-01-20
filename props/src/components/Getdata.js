const Getdata = (props) => {
    const details = props.data
    return(
       <div>
        <table>
            <thead>  
            <tr>
                <th>Name</th>
                <th>BY</th>
                <th>City</th>
            </tr>
            </thead>
            
            <tbody>
               {
                details.map((e)=> {
                    return(
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.by}</td>
                            <td>{e.city}</td>

                        </tr>
                    )
                })
               }
            </tbody>
        </table>

       </div>
    )
}
export default Getdata