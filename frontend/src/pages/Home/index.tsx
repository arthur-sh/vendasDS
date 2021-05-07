import 'assets/css/styles.css'
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <NavBar />
        <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">DSVendas</h1>
            <p className="lead">Analise o desempenho de vendas por diferentes perspectivas</p>
            <hr/>
            <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
            <p>Na construção da aplicação foi usado tecnologias como React, Spring Boot, JPA, SQL, e PostgresSQL.</p>
            <Link to="/dashboard" className="btn btn-primary btn-lg">
                Acessar Dashboard da aplicação.
            </Link>
        </div>
    </div>
    <Footer />
    </>
    );
}

export default Home