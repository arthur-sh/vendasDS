import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import 'assets/css/styles.css'
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Painel de vendas</h1>

                <div className="row px-3">
                    <div className="col sm-6">
                        <h5>Taxa de sucesso(%)</h5>
                        <BarChart />
                    </div>

                    <div className="col sm-6">
                        <h5>Total de vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Total de vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Home