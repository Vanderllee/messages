
type User = {
    name: string;
    avatar_url: string;
}

type MessageProps = {
    id: string;
    text: string;
    user: User;
}

export type Props ={
    data: MessageProps;
}