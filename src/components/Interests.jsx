const interests = [
    {icon: 'mdi-tea', title: 'Tea', text: 'I start every morning with a hot cup of tea. My current favorites are Lupicia\'s Cookie Black Flavored Tea and Amanatsu Oolong Tea'},
    {icon: 'mdi-tennis', title: 'Tennis and Badminton', text: 'I enjoy playing Badminton and other racket sports, and was an active member of the badminton club while I was working as an Assistant Language Teacher.'},
    {icon: 'hiragana-a', title: 'Japanese Language and Culture', text: 'I have taught in Japan for two years in a small village in Southern Japan. Some of my greatest experiences and came from there.'},
    {icon: 'laptop-code', title: 'Web, Game and Mobile Development', text: 'I started programming on my own while I was in Junior Highschool. I decided to pursue my interest further in uniersity and graduated with a degree in Computer Science.'},
    {icon: 'pencil-ruler', title: 'Lineart Illustration', text: 'I enjoy participating in events like Inktober and 24-Hour Comic.'},
    {icon: 'palette', title: 'Watercolor and Goauche Painting', text: 'Painting has become a new hobby of mine. You can see my artwork on my instagram profile.'},
    {icon: 'th', title: 'Pixel Artwork', text: 'Going hand-in-hand with game development, creating artwork by pixels is a great way to understand composition on a smaller scale.'}
];

const Interests = () =>{
    
    renderInterests = () => {
        return (
        <div className="interest-icons">
            {interests.map(item=>{
                const iconClasses = `interest-icon ${(this.state.interestIcon === item.icon)? 'active': ''}`;
                switch(item.icon)
                {
                    case 'hiragana-a':
                        return (<div 
                            key={item.icon}
                            className={iconClasses} 
                            onClick={()=>this.changeInterestText(item)}
                            >あ</div>);
                    case 'mdi-tennis':
                        return (<div key={item.icon} className={iconClasses} ><Icon 
                            path={mdiTennis}
                            size={1.4}
                            className="mdi-icon" 
                            onClick={()=>this.changeInterestText(item)}
                            /></div>);
                    case 'mdi-tea':
                        return (<div key={item.icon} className={iconClasses} ><Icon 
                            path={mdiTea}
                            size={1.4}
                            className="mdi-icon" 
                            onClick={()=>this.changeInterestText(item)}
                            /></div>);
                    default:
                        return (
                        <div 
                            key={item.icon}
                            className={iconClasses} 
                            onClick={()=>this.changeInterestText(item)}
                            ><i className={`fa fa-${item.icon}`}></i>
                        </div>
                        );
                }
            })}
        </div>
        );
    };

    const changeInterestText = (interest) => {
        const {title, text, icon} = interest;
        if (this.state.interestIcon === icon){
            this.setState({
                interestTitle: '',
                interestText: '',
                interestIcon: ''
            });
        } else {
            this.setState({
                interestTitle: title,
                interestText: text,
                interestIcon: icon
            });
        }
    };
    
    return (
        <div>
            {renderInterests()}
        </div>
    );
}

export default Interests;