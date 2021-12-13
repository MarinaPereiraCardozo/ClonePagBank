import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
    // header inicio
    containerHeader:{
        paddingLeft: 10,
        flexDirection: 'row',
        backgroundColor: '#4FA73F',
    },
    containerLogo:{
        width: 180,
        justifyContent: 'center',
        margin:10
    },
    logo: {
        width: 100,
        height: 30,
    },
    containerIcones:{
        flexDirection: 'row',
        width: 200,
        margin:10,
        paddingRight: 10
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    //header fim
    containerTopo:{
        backgroundColor: '#4FA73F',
    },
    containerSaldo: {
        backgroundColor: '#1C8914',
        padding:5,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    containerSaldoTopo: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    containerTextoSaldo: {
        widht: '40%',
        marginLeft: 10,
    },
    containerOlho: {
        widht: '50%',
        alignItems: 'flex-end',
        marginLeft: 240
    },
    textoSaldo:{
        color: 'white',
        fontSize: 18,
    },
    iconOlho: {
        width: 30,
        height: 25,
        marginLeft: 10,
    },
    saldo:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    containerSaldoValor: {
        paddingBottom: 10,
        marginLeft: 10,
    },
    textoValor:{
        color: 'white',
        fontSize: 16,
    },
    valor:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerTextoValor: {
        widht: '40%',
        marginLeft: 10,
        marginTop: 5,
    },
    containerValor: {
        paddingBottom: 5,
        marginLeft: 10,
    },
    buttonDetalhes:{
        backgroundColor: '#186D10',
        height: 45,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDetalhesTexto:{
        color: '#D4ED8C',
        fontWeight: 'bold',
        fontSize:16
    },
    containerAzul: {
        backgroundColor: '#0077AD',
    },
    containerAzulTopo: {
        flexDirection: 'row',
        justifyContent:'center',
        padding: 10,
    },
    containerTextos:{
        width: '65%',
        marginRight: 20,
        marginLeft: 10,
    },
    texto1:{
        color: 'white',
        fontSize: 16,
        marginBottom: 3
    },
    texto2:{
        color: 'white',
        fontSize: 14,
    },
    userIcon: {
        width: 70,
        height: 70,
    },
    containerSetinha:{
        justifyContent:'center',
    },
    setinha: {
        width: 20,
        height: 20,
    },
    containerOpcoes1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1,
        backgroundColor:'#F3F4F6',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerPrincipais:{
        height: '100%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    principais:{
        fontSize: 15,
        color: '#306F96',
        fontWeight: 'bold',
    },
    containerProdInvest:{
        height: '100%',
        backgroundColor:'#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '34%',
    },
    prodInvest:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center' 
    },
    containerServicos:{
        height: '100%',
        backgroundColor:'#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
        borderTopRightRadius: 30,
    },
    servicos:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    containerOpcoes2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1,
    },
    containerPix:{
        height: '100%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
    },
    containerTransferencias:{
        height: '100%',
        backgroundColor:'#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '34%',
        borderRightColor: '#E1E1E1',
        borderRightWidth: 1,
        borderLeftColor: '#E1E1E1',
        borderLeftWidth: 1,
    },
    containerCartoes:{
        height: '100%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
    },
    pix:{
        fontSize: 15,
        color: 'black',
    },
    pixIcon: {
        width: 30,
        height: 30,
        marginBottom: 10
    },
    transferencias:{
        fontSize: 15,
        color: '#8C8E8F',
    },
    transferenciaIcon: {
        width: 32,
        height: 26,
        marginBottom: 10,
        marginTop:30
    },
    cartoes:{
        fontSize: 15,
        color: 'black',
    },
    cartaoIcon: {
        width: 32,
        height: 26,
        marginBottom: 10,
        marginTop:30
    },
    containerOpcoes3:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1,
    },
    containerPagar:{
        height: '100%',
        backgroundColor:'#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
    },
    containerRecargas:{
        height: '100%',
        backgroundColor:'#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '34%',
        borderRightColor: '#E1E1E1',
        borderRightWidth: 1,
        borderLeftColor: '#E1E1E1',
        borderLeftWidth: 1,
    },
    containerDinheiro:{
        height: '100%',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '33%',
    },
    pagar:{
        fontSize: 15,
        color: '#8C8E8F',
        width: '50%',
        textAlign: 'center' 
    },
    contaIcon: {
        width: 36,
        height: 25,
        marginBottom: 10
    },
    recargas:{
        fontSize: 15,
        color: '#8C8E8F',
        width: '75%',
        textAlign: 'center' 
    },
    recargaIcon: {
        width: 32,
        height: 32,
        marginBottom: 3
    },
    dinheiro:{
        fontSize: 15,
        color: 'black',
        width: '80%',
        textAlign: 'center' 
    },
    dinheiroIcon: {
        width: 32,
        height: 32,
        marginTop:30
    },
    textoAmarelo:{
        backgroundColor:'#FFC935',
        fontSize: 12,
        borderRadius:30,
        fontWeight: 'bold',
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 5,
    },
    containerBolinhas:{
        alignItems: 'center'
    },
    textoVantagens:{
        marginLeft: 10,
        marginTop: 25,
        marginBottom: 10,
        color: '#67696A',
        fontWeight: 'bold',
        alignItems: 'flex-end',
    },
    containerVantagens:{
        flexDirection: 'row',
        margin: 10,
    },
    vantagem:{
        marginRight: 5,
        width: 400,
        height: 120
    },
    bolinhas:{
        width: 80,
        height: 15,
        marginBottom: 10,
    },
    containerAjuda:{
        backgroundColor:'white',
        margin:10,
        marginTop:20,
        flexDirection: 'row',    
        padding: 20,
        marginBottom:60
    },
    ajudaIcon:{
        width: 80,
        height: 80,
        marginRight: 15
    },
    containerAjudaTextos:{
        justifyContent: 'center',
    },
    ajudaTexto1:{
        fontWeight: 'bold',
        fontSize:16,
        margin: 5
    },
    ajudaTexto2:{
        margin: 5,
        width:'50%'
    },
    //footer inicio
    containerFooter:{
        flexDirection: 'row',   
        backgroundColor:'white',
        padding: 5,
    },
    footerIcon:{
        width: 36,
        height: 35,
        marginRight:25,
        marginLeft: 30
    },
    footerTextoInicio:{
        marginRight:25,
        marginLeft: 32,
        color:'#5FBD4D'
    },
    footerTexto:{
        marginRight:25,
        marginLeft: 25,
        color:'#5A5A5A'
    },
    //footer final
})