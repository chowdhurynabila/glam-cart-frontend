import UseAuth from "../../hooks/UseAuth"


const Overview = () => {
    const {user} = UseAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
        <h2 className="text-xl font-bold text-center">{user.email}</h2>

    </div>
  )
}

export default Overview