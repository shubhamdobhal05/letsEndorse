import React, {useState} from "react";
import Select from 'react-select';
import "./form.css"

const MultipleInput = () => {
    const [state, setState] = useState({
        age_of_establishment : "",
        primary_product_service_offered: "",
        secondary_product_service_offered: "",
        processed_products: "",
        relevent_experience: "",
        business_area: "",
        establishment_area: "",
        customers: "",
        suppliers: ""
    })

    const [data, setData] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = {...state, id : new Date().getTime().toString()};

        setData([...data, newData]);

        setState({age_of_establishment: "", primary_product_service_offered: "", secondary_product_service_offered:"", processed_products:"",relevent_experience: "", business_area: "", establishment_area: "", customers: "", suppliers:""});

    }


    const stage = [
        { label: "Start-up", value: 1 },
        { label: "Scale-up", value: 2 }
        
    ];
    const offered = [
        { label: "End customers", value: 1 },
        { label: "Wholesalers", value: 2 },
        { label: "Distributors", value: 3 },
        { label: "Retailers", value: 4 }
        
    ]; 
    const skill = [
        { label: "No formal skill training", value: 1 },
        { label: "Has formal skill training and certificate", value: 2 },
     
    ]; 
    const establishment = [
        { label: "Factory", value: 1 },
        { label: "Stall", value: 2 },
        { label: "Workshop", value: 3 },
        { label: "Boutique", value: 4 },
        { label: "Vehicle", value: 5 },
        { label: "Centre", value: 6 },
        { label: "Store", value: 7 },
        { label: "Mill", value: 8 },
        { label: "Farm", value: 9 },
        { label: "Plant", value: 10 },
        { label: "Processing unit", value: 11 },
        { label: "Shop", value: 12 },
        { label: "Vending cart", value: 13 },
        { label: "manufacturing unit", value: 14 }
    ];
    const locality = [
        { label: "Urban", value: 1 },
        { label: "Rural", value: 2 },
        { label: "Semi-urban", value: 3 },
        { label: "Slum", value: 4 }
        
    ];
    const infra = [
        { label: "Rented", value: 1 },
        { label: "Leased", value: 2 },
        { label: "Self-owned", value: 3 },
       
        
    ];
    const market = [
        { label: "Not conducted", value: 1 },
        { label: "Market research has been conducted", value: 2 },    
    ];
    const primary = [
        { label: "Local", value: 1 },
        { label: "Regional", value: 2 },
        { label: "National", value: 3 },
        { label: "International", value: 4 },
        
    ];
    const season = [
        { label: "Consistent sales across all seasons", value: 1 },
        { label: "Higher sales in festive seasons", value: 2 },
        { label: "High sales in cropping/cultivation seasons", value: 3 },
        { label: "High sales in peak seasons", value: 4 },
        
    ];
    const competition = [
        { label: "No similar goods/service provider in this locality", value: 1 },
        { label: "Only a few similar goods/service provider in this locality", value: 2 },
        { label: "Many similar goods/service provider in this locality", value: 3 },    
    ];
    const usp = [
        { label: "the entrepreneur's expreience in this feild", value: 1 },
        { label: "innovative product/service", value: 2 },
        { label: "high profit marhgin", value: 3 },
        { label: "high growth potential", value: 4 },
        { label: "superior customer support", value: 5 },
        { label: "quality and affordable products/service", value: 6 }, 
        { label: "high demand in the target market", value: 7 },
        { label: "abundant supply of raw material", value: 8 },
        { label: "wild range of products/services", value: 9 },
        { label: "robust value-chain of the business", value: 10 },
        { label: "frequency of customer visits", value: 11 },
           
    ];
    const multiLocation = [
        { label: "Nearness to market", value: 1 },
        { label: "Good footfall", value: 2 },
        { label: "Nearness to source of raw materials", value: 3 },
        { label: "Nearness to targeted customers demographic", value: 4 },
        { label: "Lesser competition around", value: 5 },
        { label: "Access to permit/license to operate", value: 6 }, 
        { label: "Nearness to suppliers", value: 7 },
        { label: "Affordability(rent)", value: 8 },
        { label: "No rental overheads", value: 9 },
        { label: "Other such factors", value: 10 },
           
    ];
    const marketing = [
        { label: "Distribution of marketing material(pamphlets/flyers)", value: 1 },
        { label: "storefront/business branding/", value: 2 },
        { label: "Seasonal discounts and offers", value: 3 },
        { label: "Cross-promotion", value: 4 },
        { label: "Digital Marketing", value: 5 },
        { label: "Word of mouth", value: 6 },       
    ];
    const avenues = [
        { label: "increasing the variety of product/service offering", value: 1 },
        { label: "expanding the current offering to other geographies", value: 2 },
        { label: "opening more outlets", value: 3 },
        { label: "growing the scale of operations", value: 4 },
        { label: "building value-chain integrations", value: 5 },
        { label: "other allied revenue streams", value: 6 },        
    ];

    
    
    
    
    return (
        <div className="container">
        <form action="" onSubmit={handleSubmit} className = "form">
            <div>
                <label htmlFor="business_stage">Stage of business</label>
                <Select options = {stage}/>
            </div>
            <div>
                <label htmlFor="age_of_establishment">Age of establishment</label>
                <input type="number" 
                value = {state.age_of_establishment}
                onChange={handleInput}
                name="age_of_establishment" id="age_of_establishment"/>
            </div>
            <div>
                <label htmlFor="primary_product_service_offered">Primary Products/Services Offered</label>
                <input type="text" 
                 value = {state.primary_product_service_offered}
                 onChange={handleInput}
                 name="primary_product_service_offered" id="primary_product_service_offered"/>
            </div>
            <div>
                <label htmlFor="offered_to">Offered to</label>
                <Select options = { offered }/>
            </div>
            <div>
                <label htmlFor="secondary_product_service_offered">Secondary Products/Services Offered</label>
                <input type="text" 
                 value = {state.secondary_product_service_offered}
                 onChange={handleInput}
                 name="secondary_product_service_offered" id="secondary_product_service_offered"/>
            </div>
            <div>
                <label htmlFor="processed_products">Processed products</label>
                <input type="text" 
                 value = {state.processed_products}
                 onChange={handleInput}
                 name="processed_products" id="processed_products"/>
            </div>
            <div>
                <label htmlFor="relevent_experience">Years of relevent experience inthis field</label>
                <input type="number" 
                 value = {state.relevent_experience}
                 onChange={handleInput}
                 name="relevent_experience" id="relevent_experience"/>
            </div>
            <div>
                <label htmlFor="skill_training">Skill training</label>
                <Select options = {skill}/>
            </div>
            <div>
                <label htmlFor="usp">Unique Selling proposition</label>
                <Select isMulti options = {usp}/>
            </div>
            <div>
                <label htmlFor="establishment_type">Establishment Type</label>
                <Select options = {establishment}/>
            </div>
            <div>
                <label htmlFor="business_area">Name of the area</label>
                <input type="text" 
                 value = {state.business_area}
                 onChange={handleInput}
                 name="business_area" id="business_area"/>
            </div>
            <div>
                <label htmlFor="business_locality">locality of business</label>
                <Select options = {locality}/>
            </div>
            <div>
                <label htmlFor="infra_ownership">Ownership of infrastructure</label>
                <Select options = {infra}/>
            </div>
            <div>
                <label htmlFor="establishment_area">Establishment area</label>
                <input type="number" 
                 value = {state.establishment_area}
                 onChange={handleInput}
                 name="establishment_area" id="establishment_area"/>

            </div>
            <div>
                <label htmlFor="reason_for_location">Reason for selecting this location</label>
                <Select isMulti options = {multiLocation}/>
            </div>
            <div>
                <label htmlFor="market_research">Market Research</label>
                <Select options = {market}/>
            </div>
            <div>
                <label htmlFor="primary_market">Primary Market</label>
                <Select options = {primary}/>
            </div>
            <div>
                <label htmlFor="customers">Customers</label>
                <input type="text" 
                 value = {state.customers}
                 onChange={handleInput}
                 name="customers" id="customers"/>
            </div>
            <div>
                <label htmlFor="seasonality">Seasons of high sales</label>
                <Select options = {season}/>            
            </div>
            <div>
                <label htmlFor="competition">Competition</label>
                <Select options = {competition}/>            
            </div>
            <div>
                <label htmlFor="suppliers">List of suppliers</label>
                <input type="text" 
                 value = {state.suppliers}
                 onChange={handleInput}
                 name="suppliers" id="suppliers"/>
            </div>
            <div>
                <label htmlFor="marketing_avenues">Marketing avenues</label>
                <Select isMulti options = {marketing}/>
            </div>
            <div>
                <label htmlFor="scaleup_potential">Avenues of scaling upin the future</label>
                <Select isMulti options = {avenues}/>
            </div>

            <button type="submit">Submit</button> 
            
        </form>

        <div className="div">
            {
                data.map((curElem) => {
                    return (
                    <div key = {curElem.id}>
                        <p>This enterprise has been operational since {curElem.age_of_establishment}years and has been serving its customers since then</p>
                        <p>This establishment offers products/services like{curElem.primary_product_service_offered}</p>
                        <p>In addition the enterprise shall also be involved in {curElem.secondary_product_service_offered}</p>
                        <p>Other products of the enterprise shall include{curElem.processed_products}</p>
                        <p>has a relevent experience of {curElem.relevent_experience}years in this feild</p>
                        <p>{curElem.business_area}</p>
                        <p>The size of the establishment is {curElem.establishment_area}sq ft</p>
                        <p>Our customers shall include-{curElem.customers}</p>
                        <p>The enterprise shall procure goods/raw material from {curElem.suppliers}</p>

                    </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default MultipleInput;