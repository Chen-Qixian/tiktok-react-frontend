import React from "react"
import getLives from "./api/live";
import Live from "./Live";
import {LiveInfo} from './types/live'

import "./LivePage.css"



class LivePage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {lives: []};
    }

    async componentDidMount() {
        try {
            let response = await getLives();
            let lives: Array<LiveInfo> = response.data
            this.setState({lives})
        } catch (error) {
            console.error(error)
            this.setState({lives: []})
        }
    }

    render():JSX.Element {
        return (
            <div className="app_lives">
                <ul>
                    {
                        this.state.lives.map((info: LiveInfo) => (
                            <li key={info._id}>
                                <Live liveInfo={info}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default LivePage