import React, {Component} from "react"

export default class CInner extends Component{
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log('CInner - konstruktor');
    }
    static getDerivedStateFromProps(props,state){
        console.log("CInner - getDerivedStateFromProps()")
        return null
    }

    componentDidMount(){
        console.log("CInner - componentDidMount()")
    }
    render(){
console.log("CInner - render()")
return(
    <div>
        <h3>Komponent wewnętrzny</h3>
    </div>
)
    }
}