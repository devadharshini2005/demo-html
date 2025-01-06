function Updateuser()
{
    const updateuser=(e)=>
    {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/user/update/${id}`,{name})
    }
    return(
        <>
        <form>
            <label id="text">Name</label>
            <input type="text"/><br/><br/>
            <label id="text">Email</label>
            <input type="emaill"/><br/><br/>
            <label id="text">Address</label>
            <textarea></textarea><br/><br/>
            <button>create</button>
        </form>
        </>
    )

}
export default Updateuser;