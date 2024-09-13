import { useLoaderData } from "react-router-dom"

const ProfilePage = () => {

    const user = useLoaderData();

    return (
        <div className="container mt-5">
            <h1>Profile</h1>
            <div className="row">
                <div className="col-8">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={user.name} disabled />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={user.email} disabled />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage