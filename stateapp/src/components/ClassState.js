// import { Component } from "react";
// class ClassSate extends Component {
//     constructor(){
//         super()
//         this.state = {
//             movie: '12th fail',
//             actor: 'vikrant',
//             director: 'vidhu vinod chopra'
//         }
//     }
//         // updateMovie = () => {
//         //     this.setState(
//         //         {
//         //             movie: 'Barfi',
//         //             actor: 'Ranbir',
//         //             director: 'Anurag Basu'
//         //         }
//         //     )

//         // }
//         //toggle between two values
//         updateMovie = () => {
//             if(this.state.isUpdate){
//                 this.setState({
//                     movie: '12th fail',
//                     actor: 'Vikrant',
//                     director: 'Vidhu Vinod Chopra',
//                     isUpdate : false
//                 })
//             }else{
//                 this.setState({
//                     movie: 'Barfi',
//                     actor: 'Ranbir',
//                     director: 'Anurag Basu',
//                     isUpdate: true
//                 })
//             }
//         }
//         render() {
//             return(
//                 <>
//                 <h2>Movies Name</h2>
//                 <p>Movie: {this.state.movie}</p>
//                 <p>Actor: {this.state.actor}</p>
//                 <p>Director: {this.state.director}</p>
//                 <button onClick= {this.updateMovie}>Update State</button>
//                 </>
//             )
//         }
//     }

// export default ClassSate