import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            fontSize: 25,
            color: '#0f0352',
            fontWeight: 'bold',
            fontStyle: 'italic',
            marginTop: 15,
            textDecorationLine: 'underline',
          }}>
          Welcome!!!
        </Text>

        <Image
          style={{
            width: '100%',
            marginTop: 10,
            height: '30%',
            resizeMode: 'contain',
            borderRadius: 10,
          }}
          source={require('../../src/images/owner.jpg')}
        />
        <Text
          style={{color: 'red', fontSize: 12, marginTop: 20, marginLeft: 10, fontWeight:'bold'}}>
          "குறள் எண்: 120"
        </Text>
        <Text
          style={{color: 'green', fontSize: 12, marginTop: 10, marginLeft: 10, fontWeight:'bold'}}>
          "வாணிகம் செய்வார்க்கு வாணிகம் பேணிப்
        </Text>
        <Text style={{color: 'green', fontSize: 12, marginLeft: 10, marginTop:5, fontWeight:'bold'}}>
            பிறவும் தமபோல் செயின்"
        </Text>
          <ScrollView>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
            marginTop: 20,
            fontStyle: 'italic',
            lineHeight: 30,
          }}>
          {/* We are a brand serving for almost 3 generations, providing healthy and
          hygiene snacks for the people.We do not use any chemical ingrediants
          to boost the taste Actually we are using cottonseed oil instead of
          palmolein oil. We don't do this for profit only. Our ultimate aim is
          to provide people a healthy snack for their bucks. */}
          தேனிக்கு அருகில் உள்ள நாகலாபுரம் கிராமத்தில் மூன்று தலைமுறையாக உருவாக்கப்படுகிற சேவு 
          உள்ளூர் முதல் உலக நாடுகள் வரை ஏற்றுமதி ஆகிவருகிறது. எங்கள் சேவு இயற்கை முறையில் தயார்படுத்தப்படுகிறது.
          நாங்கள் எந்த ஒரு செயற்கை சுவை ஊட்டியும் சேர்ப்பதில்லை. மாறாக பாமாயில்க்கு பதிலாக பருத்தி என்னை கொண்டு தயாரிக்கின்றோம்
         
        </Text>

        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{color: '#ee00fe', fontSize: 20, fontWeight: 'bold', marginTop:5, textDecorationLine:'underline'}}
            onPress={() => navigation.navigate('Products')}>
            Our Products...
          </Text>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
