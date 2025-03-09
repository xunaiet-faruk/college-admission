import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
});

const Useaxios = () => {
    return axiosPublic;
};

export default Useaxios;
