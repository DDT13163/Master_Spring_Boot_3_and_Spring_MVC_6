const person = {
    name: 'Dinh Duc Trong',
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'UK',
    },
    profiles: ['twitter','linkedin','instagram'],
    printProfile: () => {
        person.profiles.map(
            profiles => console.log(profiles)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{ person.printProfile() }</div>
        </>
    )
}