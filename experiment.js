const obj6 = {
    getname(){
        console.log("getname", this);
        function getYoutubeChannelName(){
            console.log("Youtube", this);
        }
        return getYoutubeChannelName();
    }
}
obj6.getname();