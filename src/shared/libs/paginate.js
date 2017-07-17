// import React from 'react'
// import debounce from 'lodash/debounce'
// import Spinner from 'components/Spinner'

// function Paginate(WrappedComponent, count = 8) {
//   class PropsProxy extends React.Component {
//     constructor(props) {
//       super(props)
//       this.getNextPage = this.getNextPage.bind(this)
//       this.handleScroll = debounce(this.handleScroll, 300).bind(this)
//       this.state = {
//         autoScroll: true,
//         loading: false,
//       }
//     }

//     componentDidMount () {
//       window.addEventListener('scroll', this.handleScroll)
//       this.handleScroll()
//     }

//     componentWillUnmount () {
//       window.removeEventListener('scroll', this.handleScroll)
//     }

//     handleScroll () {
//       if (!this.state.autoScroll
//         || this.inFlight
//         || this.state.loading
//         || !this.props.hasMore) return

//       if (this.refs.paginator.getBoundingClientRect().top < window.innerHeight) {
//         this.getNextPage()
//       }
//     }

//     getNextPage () {
//       this.setState({ loading: true })
//       this.props.nextPage()
//         .then(res => {
//             this.setState({ loading: false, autoScroll: true })
//             this.handleScroll()
//         })
//     }

//     render () {
//       return (
//         <div>
//           <WrappedComponent {...this.props}/>
//           { this.props.hasMore && (
//               <div className='center mb2' ref='paginator'>
//                 { this.state.loading
//                   ? <Spinner />
//                   : !this.state.autoScroll
//                     ? <button className='btn btn-outline' onClick={this.getNextPage} >mo</button>
//                     : null
//                 }
//               </div>
//           )}
//         </div>
//       )

//     }
//   }

//   PropsProxy.propTypes = {
//     nextPage: React.PropTypes.func, // Function should return a promise
//     hasMore: React.PropTypes.bool,
//   }

//   return PropsProxy
// }

// export default Paginate
