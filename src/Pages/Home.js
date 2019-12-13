import * as React from "react"
import axios from "axios"

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
            console.log(data)

            let dataState = this.state.data
            const users = data.data
            dataState = users

            this.setState(prevState => ({
                ...prevState,
                data: dataState
            }), () => {
                if (this.state.data.length === data.data.length) {
                    this.setState(prevState => ({
                        ...prevState,
                        isLoading: false,
                    }))
                }
            })
        }).catch(err => {
            console.log("Error : ", err)
        })
    }

    renderListUsers = (data) => {
        return data.map((data, index) => {
            return (
                <div key={index.toString()}>{data.name}</div>
            )
        })
    } 

    render() {
        const data = this.state.data
        console.log("Data : ", data)
        const loading = this.state.isLoading

        if (loading) {
            return (
                <div>Loading ...</div>
            )
        }

        return (
            <React.Fragment>
                {
                    this.renderListUsers(data)
                }
            </React.Fragment>
        )
    }
}

export default Home