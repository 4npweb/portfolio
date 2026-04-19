//Assets
import "./Services.css"

function Service({service}) {
    return (
        <div className="service">
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <a className="service-btn-main" href="#">See examples</a>
        </div>
    )
}

export default Service