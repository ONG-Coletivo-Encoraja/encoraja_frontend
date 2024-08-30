const imageUrl = '/img/mulheres.jpg';

export default function ImgWoman() {
    return (
        <div className="flex justify-center mt-4">
            <img
                src={imageUrl}
                alt="Imagem de mulheres"
                className="w-full  h-auto rounded-lg shadow-m"
            />
        </div>
    );
}
