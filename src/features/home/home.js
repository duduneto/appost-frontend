import React,{Component} from 'react';
import axios from 'axios';
import {Row, Col} from 'react-flexbox-grid';
import { Card } from 'antd';
import ListPlayer from './listPlayer';
import ListBet from './listBet';
import BetsResults from './betsResults';
import urls from '../../common/urls';
import { setInitialInformations } from './actions/homeAction';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {usuarios: []}
    }

    componentDidMount(){
        axios.get(`${urls.OAPI_URL}/usuario`)
        .then( resp => {
            console.log(resp.data)
            this.props.setInitialInformations(resp.data);           
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <Row>
                <Col xs>
                    <Card title="Ranking" style={{ width: 300 }}>
                        <ListPlayer />
                    </Card>
                </Col>
                <Col xs >
                    <Card title="Seus Palpites" style={{ width: 300 }}>
                        <ListBet />
                    </Card>
                </Col>
                <Col xs >
                    <Card title="Seus Resultados" style={{ width: 300 }}>
                        <BetsResults />
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({ informations: state.initialInformations });
const mapDispatchToProps = dispatch => bindActionCreators( { setInitialInformations }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;