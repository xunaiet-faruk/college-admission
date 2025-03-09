import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://college-book-srvices-database.vercel.app'
});

const Useaxios = () => {
    return axiosPublic;
};

export default Useaxios;
