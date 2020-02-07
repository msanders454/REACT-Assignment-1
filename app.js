function App() {
	return (
		<section id="body-container">
			<section className="paper-container">
				<section className="paper-wrapper">
					<Header />
          <Education />
					<Employment />
				</section>
			</section>
		<Footer />
		</section>
	);
}

function Header() {
  return (
    <header>
      <h1> Sally Student's Resume</h1>
      <address>
        <b>Name:</b> Sally Student<br />
        <b>Email:</b><a href="sallystudent454@gmail.com">sallystudent454@gmail.com </a><br />
        <b>Number:</b> (725)597-8368<br />
      </address>
      <img src="https://live.staticflickr.com/4387/35937789784_d9697a3ba8_b.jpg" alt="Sally Student" />
    </header>  	
  )
}

function Education() {
  return (
    <section class="education">
    	<ul>
          <li> <b>High School</b>, Ben Franklin High 2009-2013. 4.0 GPA</li>
          <li> <b>University</b>, Clemson University 2013-2017. BA in Chemestry 3.6 GPA </li>
          <li> <b>Masters</b>, University of Alabama 2017-2019. Masters in Physics 3.8 GPA</li>
     </ul>
    </section>
  )
}

function Employment() {
  return (
    <section id="employment">
    	<h2>Work History</h2>
          <ul>
            <li> <b>Stark Chemestry</b>, Student Chemist 2016-2017.<br />lorem ipsum</li>
            <li> <b>Lux Science</b>, Lab tester  2017-2019. <br />lorem ipsum</li>
            <li> <b>General Store's Lab</b>, Lab Technician 2019-Present.<br />lorem ipsum</li>
          </ul>
    </section>
  )
}


function Footer() {
  return (
    <footer>
      <p>&copy;&nbsp;Sally Student | 2019</p>
    </footer>
  )
}

ReactDOM.render(
	<App />,
	document.querySelector('#app-root')
);
