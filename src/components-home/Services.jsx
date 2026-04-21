import Service from "./Service"

//Assets
import "./Services.css"
import services from "../data/services"

function Services() {
    return (
        <section className="services" id="services">
            <h2 className="services-heading">What do I offer?</h2>
            
            <div className="service-container">
                {services.map((service, i) => (
                    <Service key={service.id} service={service} index={i}/>
                ))}
            </div>
        </section>
    )
}

export default Services