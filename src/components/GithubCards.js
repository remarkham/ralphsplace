import React from "react";
import axios from "axios";


class Form extends React.Component {
    state = {
        userName: "",
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        // TODO: handle failed request or 
        // replace with a proper data source
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);

        this.props.onSubmit(resp.data);
        this.setState({ userName: "" });
    };

    handleReset = async (event) => {
        event.preventDefault();
        this.props.onReset();
    };

    render() {
        return (
            <div className="row">
                <div className="col align-self-center">
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit} onReset={this.handleReset}>
                        <div className="form-row mx-auto justify-content-center">
                            <input
                                type="text"
                                className="form-control mr-sm-2"
                                value={this.state.userName}
                                onChange={event => this.setState({ userName: event.target.value })}
                                placeholder="GitHub username"
                                required
                            />
                            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">submit</button>
                            <button type="reset" className="btn btn-outline-success my-2 my-sm-0">reset</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const CardList = (props) => (
    <div className="row">
        {props.profiles.map((profile, index) =>  
            <Card key={index} profile={profile} />
        )}
    </div>
);


class Card extends React.Component {



    render() {
        const profile = this.props.profile;
        const pName = (profile.name ? profile.name : "No Name");
        const pRepos = (profile.public_repos ? "Repos: " + profile.public_repos : "");
        const pGists = (profile.public_gists ? "Gists: " + profile.public_gists : "");
        const pFollowers = (profile.followers ? "Followers: " + profile.followers : "");

        return (
            <div className="card align-self-center col-12 col-sm-8 col-md-6 col-lg-3 h-100">
                <a className="nav-link" href={profile.html_url}>
                    <img className="card-img-top" src={profile.avatar_url} alt="Card image cap" />
                </a>
                <div className="card-body">
                    <a className="nav-link" href={profile.html_url}>
                        <h5 className="card-title">{profile.login}</h5>
                    </a>
                    <p className="card-text">{pName}</p>
                    <p className="card-text">{pRepos} {pGists} {pFollowers}</p>
                </div>
            </div>
        );
    }
}


class GithubCards extends React.Component {
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(preState => ({ profiles: [profileData, ...preState.profiles] }));
    };

    resetProfiles = () => {
        this.setState({ profiles: [] });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="header col align-self-center">Github User Lookup</div>
                </div>
                <Form onSubmit={this.addNewProfile} onReset={this.resetProfiles} />
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }
}

export default GithubCards;