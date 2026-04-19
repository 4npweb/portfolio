import services from "../data/services"
import Service from "./Service"

//Assets
import "./Services.css"

function Services() {
    return (
        <section className="services" id="services">
            <h2 className="services-heading">What do I offer?</h2>
            
            <div className="service-container">
                {services.map(service => (
                    <Service key={service.id} service={service}/>
                ))}
            </div>
        </section>
    )
}

export default Services