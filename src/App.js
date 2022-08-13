import { Typography, Button } from "antd";
import { Reset } from "styled-reset";

import 'antd/dist/antd.css';

const { Title } = Typography;
export default function App() {
    return (
        <>
            <Reset />
            <Title>Olá, Mundo!</Title>
            <Button type="primary">Ok!</Button>
        </>
    )
}