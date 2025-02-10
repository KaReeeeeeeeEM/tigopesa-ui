import { BiCart } from "react-icons/bi";
import { FaCashRegister, FaExchangeAlt, FaPiggyBank, FaWallet } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import { MdFileOpen, MdPayment } from "react-icons/md";

export const categories = [
    {
        id: 1,
        name: 'Send Money',
        icon: <FaWallet />,
    },
    {
        id: 2,
        name: 'Bill Pay',
        icon: <FaFile />,
    },
    {
        id: 3,
        name: 'Transfer To Bank',
        icon: <FaExchangeAlt />,
    },
    {
        id: 4,
        name: 'Cash Out',
        icon: <FaCashRegister />,
    }, 
    {
        id: 5,
        name: 'Top Up',
        icon: <FaPiggyBank />,
    }, 
    {
        id: 6,
        name: 'Pay Merchant',
        icon: <MdPayment />,
    }, 
    {
        id: 7,
        name: 'Tigo Shop',
        icon: <BiCart />,
    }, 
    {
        id: 8,
        name: 'My Actitivities',
        icon: <MdFileOpen />,
    }
]