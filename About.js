import React from 'react';
import Figure from 'react-bootstrap/Figure';
import TotalPrice from './TotalPrice';

const About = () => {
    return (
        <div className="container">
            <TotalPrice totalPrice={TotalPrice} />
            {/* Display store logo */}
            <Figure>
                <Figure.Image 
                    width={171}
                    height={163}
                    alt="Store logo"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ftimeless-love-concept-symbol-created-vector-24454335&psig=AOvVaw2ym2v6zb3SjHPNOqPghXSm&ust=1718366532355000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiPh6rE2IYDFQAAAAAdAAAAABAw"
                />
                <Figure.Caption>
                    Our store Logo.
                </Figure.Caption>
            </Figure>
            {/* Displaying store building image */}
            <Figure>
                <Figure.Image 
                    width={171}
                    height={163}
                    alt="Our store"
                    src="https://www.tripsavvy.com/thmb/OoH5WkYVRWrHHUh3ChFJhdeQ1IY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Westfield_London_shopping_area_in_London_Borough_of_Hammersmith_and_Fulham_spring_2013_11-59ff7dbebeba33001a19ee58.jpg"
                />
                <Figure.Caption>
                    Store building
                </Figure.Caption>
            </Figure>
            {/* Displaying store interior image */}
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="Our Store"
                    src="https://media.istockphoto.com/id/837891222/photo/interior-of-modern-hallway.jpg?s=612x612&w=0&k=20&c=6JunWhChUVS2ohCZ_kMXSl-BveRU7Mf9-HXsQLd24-E="
                />
                <Figure.Caption>
                    Our store
                </Figure.Caption>
            </Figure>
            <p>Contact us at: timelesshoe@store.com</p>
        </div>
    );
};

export default About;