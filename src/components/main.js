import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import MainNavigation from './mainNavigation'
import PageTwo from './pageTwo'
import PageThree from './pageThree'
import PageOne from './PageOne/PageOne'
import PageFour from './pageFour'
import Menu from './menu'


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
          arrowNavigation: true,
delay:                1000,
fitToSection: true,
	fitToSectionDelay: 1000,
easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
lazyLoading: true,
        }



this.state = {
isShowMenuState: false,
setMenuBtn: false,
menuImg: false 
}
  }

  showMenu = () => {
		this.setState(function(prevState) {
			return {isShowMenuState: !prevState.isShowMenuState};
		});
this.seeamenu();
  }

seeamenu = () => {
  this.setState({
    menuImg: false  
  })
}


  render() {
     return <div style={{ backgroundColor: '#000000' }}>
      <div className='main-pages-container'>
        <div className='mobile-line' />

        {this.state.isShowMenuState && <Menu />}
        <MainNavigation showMenu={this.showMenu} 
        Menu={this.state.isShowMenuState} />

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
