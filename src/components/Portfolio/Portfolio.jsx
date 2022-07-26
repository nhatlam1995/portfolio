import React, { useEffect, useState } from 'react'
import PortfolioList from './PortfolioList/PortfolioList'
import './styles.scss'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data'

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [dataSelected, setDataSelected] = useState([]);
    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web Application'
        },
        {
            id: 'mobile',
            title: 'Mobile Application'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'content',
            title: 'Content Creator'
        }
    ];

    useEffect(() => {

        switch (selected) {
            case 'featured':
                setDataSelected(featuredPortfolio);
                break;
            case 'web':
                setDataSelected(webPortfolio);
                break;
            case 'mobile':
                setDataSelected(mobilePortfolio);
                break;
            case 'design':
                setDataSelected(designPortfolio);
                break;
            case 'content':
                setDataSelected(contentPortfolio);
                break;
            default:
                setDataSelected(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className="portfolio" id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {dataSelected.map((item) => (
                    <div className="item">
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
