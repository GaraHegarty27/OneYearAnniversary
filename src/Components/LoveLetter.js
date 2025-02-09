import React from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../Css/LoveLetter.css";

function AboutUsPage() {
  const message = `Manya Ranganathan. I am so in love with you. You make the dark days brighter. You make the days with you shorter. 
                    You make the days without you longer. You make the days that are too loud quieter. You make the days that are too quiet louder. 
                    You lift me up when I am down. You make me want to be a better man. You make my inner child come out when I am too serious. 
                    You make me more serious when I am too childish. Without you I am always tipping one way or the other but with you I am better, 
                    I am whole. I want to experience every we have already experienced together again and everything we are yet to experience again twice 
                    more before it even happens. I have gone through 20 years not caring about life, always wanting to do well for myself but not knowing 
                    why, never knowing what for. On the 4th of February 2024 I locked eyes with the reason I had been working throughout my life for. 
                    I have worked through school and challenges in life just because i was told I should and following blindly. I left uni and felt life was 
                    a mess. I didn't know where I was going and nor did I care. I woke up every morning numb and just existing but not experiencing anything 
                    as I had no reason to, nothing to live for and nothing to strive for. I reached a point in my life where I had nothing to live for. 
                    But i would do it all again to reach this point in my life again. Because for the past 6 months that has not been the case. I wake up 
                    every morning so happy to be alive. So happy to be able to exist and cherish the woman of my dreams. To get to say I found her and she 
                    wanted me as much as I wanted her makes me cry thinking about it and I'm struggling to even type this right now through the tears of 
                    happiness I have to get the honour of writing this about you. To get to wake up next to you everyday. To get to bring you coffee in bed. 
                    To get to able to crawl back into bed beside you. To get to hold your hand in public. To get to be able to make your life easier. To be able 
                    to hold you when you are down. To be there for you when you are down. To be able to kiss you. To be able to do all of this for you is 
                    the greatest present I have ever received. But the greatest of all is the honour of calling you mine and experiencing my life to come with 
                    you. I can't wait to be there for every major life event and be at your side for each no matter how high and no matter how low. 
                    From your graduation to mourning to birthdays to you first day as a junior doctor to the large night exam stress to the first day as the 
                    amazing surgeon you are destined to become. I will be there with a banner supporting you or there with shoulder to rest your head. 
                    I can't wait to travel with you across the world. From christ the redeemer in rio to machu pichu in Peru to chichen itza in Mexico 
                    to the colessum in Rome to petra in jordan to the great wall of China in China and to the taj mahal in your amazing homeland and 
                    everything in between. To experience it with you would be everything but it experience it without you would be nothing. I know I make mistakes 
                    and I am not perfect but I will always wake up every day trying to improve myself just so you are proud to call me yours. I miss you so much 
                    darling. But I Love you so much more which has made these past 2 months worth it and will make the next one even more worth it. All I have 
                    wanted in life is someone to love and to feel it back and for us to be a team against the big bag world snd in you I have found that. 
                    But as a kid growing up I was always scared of how can you trust someone so much to give them so much of you. And never in my wildest 
                    dreams did I think someone could make me feel in a lifetime how you have made me feel in 6 months. With you I feel safe, loved, cared for, 
                    happy and I trust you so much. You missus are so special words will never be capable of doing you justice. If the world was filled with 
                    Manya Ranganathans it would be such a better place. From the moment I met you I knew you were what I wanted and from that moment on everything 
                    in life changed and nothing else mattered. I remember so clearly the day and the moment I first missed you. asked you to be my girlfriend. 
                    I remember so clearly the day and the moment I asked you to be my girlfriend. I remember so clearly the moment I first told you I loved 
                    you. All of these moments I will forever treasure and never forget. But all of these moments will never be able to compare to the moment I 
                    get down on one knee and ask you to be mine forever, because from the very first conversation we had in that table at nandos I knew that 
                    is what is destined to come. But even that first and only proposal in my lifetime will not compare to that moment those ceremony doors 
                    open and i see my beautiful bride walking down the isle towards me as I cry my eyes out in complete euphoria. When I hear those 2 magical 
                    words "I Do" I will know I have completed life in what I set out to do as a child. But I will know the life I have always wanted is only 
                    starting and I'm sharing it with the woman of my dreams. Manya Ranganathan. Dino. Gorgeous. My love. And most importantly Missus. I Love you 
                    so much and I will forever be by your side and your number one fan. Love bubs xx`;

  return (
    <Card className="aboutus-card">
      <Card.Header className="aboutus-header">
        <h3 className="aboutus-title">
          <strong>
            <u>To My Darling Girl...</u>
          </strong>
        </h3>
      </Card.Header>
      <Card.Body>
        <h7>{message}</h7>
      </Card.Body>
    </Card>
  );
}

export default AboutUsPage;
