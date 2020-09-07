import React from "react";
import { Table } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import styles from './Statistics.module.css';

const Statistics = (props) => {

    const { employees } = useSelector((state) => state.employees);

    function brojZaposl(broj) {
        employees.map(el => (broj = broj + 1));
        return broj;
    }

    function prosjecnaPlaca(broj) {
        let ukupnoljudi = 0;
        let zbrojplaca = 0;
        employees.map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.map(el => zbrojplaca = zbrojplaca + Number(el.placa));
        broj = zbrojplaca / ukupnoljudi;
        return Math.round(broj);
    }

    function prosjecnaDob(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumRodjenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnoVrijeme(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumZaposlenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function zaposlIT(broj) {
        employees.filter(tj => tj.odjel === "IT").map(el => broj = broj + 1);
        return broj;
    }
    function zaposlAccounting(broj) {
        employees.filter(tj => tj.odjel === "Accounting").map(el => broj = broj + 1);
        return broj;
    }
    function zaposlManagement(broj) {
        employees.filter(tj => tj.odjel === "Management").map(el => broj = broj + 1);
        return broj;
    }
    function zaposlHR(broj) {
        employees.filter(tj => tj.odjel === "HR").map(el => broj = broj + 1);
        return broj;
    }
    function prosjecnaDobIT(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "IT").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "IT").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumRodjenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaDobManagement(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "Management").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "Management").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumRodjenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaDobAccounting(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "Accounting").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "Accounting").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumRodjenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaDobHR(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "HR").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "HR").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumRodjenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaPlacaIT(broj) {
        let ukupnoljudi = 0;
        let zbrojplaca = 0;
        employees.filter(tj => tj.odjel === "IT").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "IT").map(el => zbrojplaca = zbrojplaca + Number(el.placa));
        broj = zbrojplaca / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaPlacaAccounting(broj) {
        let ukupnoljudi = 0;
        let zbrojplaca = 0;
        employees.filter(tj => tj.odjel === "Accounting").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "Accounting").map(el => zbrojplaca = zbrojplaca + Number(el.placa));
        broj = zbrojplaca / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaPlacaManagement(broj) {
        let ukupnoljudi = 0;
        let zbrojplaca = 0;
        employees.filter(tj => tj.odjel === "Management").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "Management").map(el => zbrojplaca = zbrojplaca + Number(el.placa));
        broj = zbrojplaca / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnaPlacaHR(broj) {
        let ukupnoljudi = 0;
        let zbrojplaca = 0;
        employees.filter(tj => tj.odjel === "HR").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "HR").map(el => zbrojplaca = zbrojplaca + Number(el.placa));
        broj = zbrojplaca / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnoVrijemeIT(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "IT").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "IT").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumZaposlenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnoVrijemeAccounting(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "Accounting").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "Accounting").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumZaposlenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnoVrijemeManagement(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "Management").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "Management").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumZaposlenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }
    function prosjecnoVrijemeHR(broj) {
        let ukupnoljudi = 0;
        let zbrojdobi = 0;
        employees.filter(tj => tj.odjel === "HR").map(el => ukupnoljudi = ukupnoljudi + 1);
        employees.filter(tj => tj.odjel === "HR").map(el => zbrojdobi = zbrojdobi + new Date().getFullYear() - new Date(el.datumZaposlenja).getFullYear());
        broj = zbrojdobi / ukupnoljudi;
        return Math.round(broj);
    }

    return (
        <div id="parent">            
            <h2>Opća statistika</h2>
            <Table className={styles.tabla} singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ukupan Broj Zaposlenika</Table.HeaderCell>
                        <Table.HeaderCell>Prosjecna Placa</Table.HeaderCell>
                        <Table.HeaderCell>Prosjecna dob zaposlenika</Table.HeaderCell>
                        <Table.HeaderCell>Prosjecni radni vijek u firmi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row >
                        <Table.Cell>{brojZaposl(0)}</Table.Cell>
                        <Table.Cell>{prosjecnaPlaca(0)}kn</Table.Cell>
                        <Table.Cell>{prosjecnaDob(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnoVrijeme(0)} god</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>            
            <h2>Statistika po odjelima</h2>
            <h3>1. Broj zaposlenika po odjelima</h3>
            <Table className={styles.tabla} singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IT</Table.HeaderCell>
                        <Table.HeaderCell>Accounting</Table.HeaderCell>
                        <Table.HeaderCell>Management</Table.HeaderCell>
                        <Table.HeaderCell>HR</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row >
                        <Table.Cell>{zaposlIT(0)}</Table.Cell>
                        <Table.Cell>{zaposlAccounting(0)}</Table.Cell>
                        <Table.Cell>{zaposlManagement(0)}</Table.Cell>
                        <Table.Cell>{zaposlHR(0)}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <h3>2. Prosjecna placa po odjelima</h3>
            <Table className={styles.tabla} singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IT</Table.HeaderCell>
                        <Table.HeaderCell>Accounting</Table.HeaderCell>
                        <Table.HeaderCell>Management</Table.HeaderCell>
                        <Table.HeaderCell>HR</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row >
                        <Table.Cell>{prosjecnaPlacaIT(0)}kn</Table.Cell>
                        <Table.Cell>{prosjecnaPlacaAccounting(0)}kn</Table.Cell>
                        <Table.Cell>{prosjecnaPlacaManagement(0)}kn</Table.Cell>
                        <Table.Cell>{prosjecnaPlacaHR(0)}kn</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <h3>3. Prosjecna dob zaposlenika po odjelima</h3>
            <Table className={styles.tabla} singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IT</Table.HeaderCell>
                        <Table.HeaderCell>Accounting</Table.HeaderCell>
                        <Table.HeaderCell>Management</Table.HeaderCell>
                        <Table.HeaderCell>HR</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row >
                        <Table.Cell>{prosjecnaDobIT(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnaDobAccounting(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnaDobManagement(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnaDobHR(0)} god</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>            
            <h3>4. Prosjecni radni vijek po odjelima</h3>
            <Table className={styles.tabla} singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IT</Table.HeaderCell>
                        <Table.HeaderCell>Accounting</Table.HeaderCell>
                        <Table.HeaderCell>Management</Table.HeaderCell>
                        <Table.HeaderCell>HR</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row >
                        <Table.Cell>{prosjecnoVrijemeIT(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnoVrijemeAccounting(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnoVrijemeManagement(0)} god</Table.Cell>
                        <Table.Cell>{prosjecnoVrijemeHR(0)} god</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

        </div>

    );
}

export default Statistics;

