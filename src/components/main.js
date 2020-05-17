import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import MainNavigation from './mainNavigation'
import PageTwo from './pageTwo'
import PageThree from './pageThree'
import PageOne from './PageOne/PageOne'
import PageFour from './pageFour'
import Menu from './menu'

// const MainPage = () => {
//   const options = {
//     sectionClassName: 'section',
//     anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
//     scrollBar: false,
//     navigation: true,
//     verticalAlign: true,
//     sectionPaddingTop: '0px',
//     sectionPaddingBottom: '0px',
//     arrowNavigation: true
//   }

  
//   return (
//     <div style={{ backgroundColor: '#000000' }}>
//       <div className='main-pages-container'>
//         <div className='mobile-line' />
//         <Menu />
//         <MainNavigation addTrip={this.triggerAddTripState} />
//         <SectionsContainer {...options}>
 
//           <Section color='#333'>
//             <PageOne />
//           </Section>
//           <Section color='#A7DBD8'>
//             <PageTwo />
//           </Section>
//           <Section color='#E0E4CC'>
//             <PageThree />
//           </Section>
//           <Section color='#E0E4CC'>
//             <PageFour />
//           </Section>

 
//         </SectionsContainer>
//       </div>
//     </div>
//   )
// }

class MainPage extends React.Component{

  constructor(props) {
    super(props)
    this.options = {
          sectionClassName: 'section',
          anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
          scrollBar: false,
          navigation: true,
          verticalAlign: true,
          sectionPaddingTop: '0px',
          sectionPaddingBottom: '0px',
          arrowNavigation: true
        }
  }

  showMenu = () => {
    this.setState({
      ...this.state,
      isShowMenuState: true
    })
  }

  render() {
     return <div style={{ backgroundColor: '#000000' }}>
      <div className='main-pages-container'>
        <div className='mobile-line' />

        {this.state.isShowMenuState && <Menu />}
        <MainNavigation showMenu={this.showMenu} />
        <SectionsContainer {...this.options}>
 
          <Section color='#333'>
            <PageOne />
          </Section>
          <Section color='#A7DBD8'>
            <PageTwo />
          </Section>
          <Section color='#E0E4CC'>
            <PageThree />
          </Section>
          <Section color='#E0E4CC'>
            <PageFour />
          </Section>

 
        </SectionsContainer>
      </div>
    </div>
     }
}

export default MainPage
