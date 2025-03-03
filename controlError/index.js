const validateUser = ({ name, email, password } = {}) => {
    if (!name) throw new ValidationError("name is required")
    if (!email) throw new ValidationError("email is required")
    if (!password) throw new ValidationError("password is required")

    // Simula un error de conexión a la base de datos
    try {
        mongodb.connect()
    } catch (error) {
        // not return reocmendaly
        // sendBeaconError
        
        throw new ConectionError("database is not available")
    }
}

class ConectionError extends Error {
    constructor(message) {
        super(message)
        this.name = "ConectionError"
    }
}
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

try {
    const name = "Duvan Vivas"
    const email = "duvan@vivas.com"
    const password = "Duvan1"
    
    validateUser({ name, email, password }) 
} catch (error) {
    console.error(error.name)
    if (error.name === "ConectionError") {
        setTimeout(() => {
            validateUser({ name, email, password })
        }, 5000)
    } else if (error.name === "ValidationError") {
        console.error("Validation error:", error.message)
    }
}
