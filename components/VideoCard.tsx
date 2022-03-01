
interface VideoCardProps {
    name: string;
    description: string;
}

export default function VideoCard({name,description} : VideoCardProps) {

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )

}