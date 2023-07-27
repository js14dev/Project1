import { ImageType } from "../types";

type ItemsType = {
    title: string;
    color: string;
    image: any;
    content: any;
};

const items: ItemsType[] = [
    {
        title: "Personalized Learning Paths",
        color: "#1F3D8B",
        image: {
            src: "https://stateless.sellful.com/2023/05/d0ed04e2-je240kkjiua.jpg",
            width: 450,
            height: 450,
            alt: "Personalized Learning Paths",
        },
        content: (
            <>
                <p>Personalized Learning Paths:</p>
                <ul>
                    <li>
                        {" "}
                        Customized educational experiences tailored to each
                        student's learning style, pace, and interests.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Real-Time Performance Analytics",
        color: "#1F3D8B",
        image: {
            src: "https://stateless.sellful.com/2023/05/9b4deb90-ldkhwg5s3ec.jpg",
            width: 450,
            height: 450,
            alt: "Real-Time Performance Analytics",
        },
        content: (
            <>
                <p>Real-Time Performance Analytics:</p>
                <ul>
                    <li>
                        Instant insights into student performance, helping
                        teachers monitor progress and adjust teaching strategies
                        accordingly.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Peer-To-Peer Learning Support",
        color: "#1F3D8B",
        image: {
            src: "https://stateless.sellful.com/2023/05/90ef59c3-bjb2mgi8pti.jpg",
            width: 450,
            height: 450,
            alt: "Peer-To-Peer Learning Support",
        },
        content: (
            <>
                <p>Peer-To-Peer Learning Support:</p>
                <ul>
                    <li>
                        Encourage students to collaborate and learn from one
                        another, fostering a supportive learning community.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Automated Curriculum Mapping",
        color: "#1F3D8B",
        image: {
            src: "https://stateless.sellful.com/2023/05/ebaabe1f-j9jzsqfh5yi.jpg",
            width: 450,
            height: 450,
            alt: "Automated Curriculum Mapping",
        },
        content: (
            <>
                <p>Automated Curriculum Mapping:</p>
                <ul>
                    <li>
                        AI-generated curriculum plans that align with
                        educational standards and adapt to individual student
                        needs.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Predictive Analytics For Early Intervention",
        color: "#1F3D8B",
        image: {
            src: "https://stateless.sellful.com/2023/05/7623d693-o5emzfdxedg.jpg",
            width: 450,
            height: 450,
            alt: " Predictive Analytics For Early Intervention",
        },
        content: (
            <>
                <p>Predictive Analytics For Early Intervention:</p>
                <ul>
                    <li>
                        Identify at-risk students early on and provide timely
                        interventions to support their learning journey.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: "Collaborative Learning Tools",
        color: "#1F3D8B",
        image: {
            src: "https://stateless.sellful.com/2023/04/73ae36c0-tinh-khuong-psfggbywmai-unsplash.jpg",
            width: 450,
            height: 450,
            alt: "Collaborative Learning Tools",
        },
        content: (
            <>
                <p>Collaborative Learning Tools:</p>
                <ul>
                    <li>
                        Facilitate effective communication and collaboration
                        between students, teachers, and parents.
                    </li>
                </ul>
            </>
        ),
    },
   
];

export { items };
