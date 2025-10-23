export function StorySection() {
  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Label */}
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Minha Jornada</span>
          </div>

          <div className="space-y-8">
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl text-center">
              De backing tracks ao palco: a minha jornada e a sua solução
            </h2>

            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p className="text-lg">
                Eu passei por essa mesma frustração. Eu tocava em cima de backing tracks, mas quando me deparava com
                outros músicos, eu travava. Me sentia inseguro e com medo de não saber o que fazer. Cheguei a recusar
                convites para entrar em bandas por pura insegurança.
              </p>

              <p className="text-lg">
                Foi nessa jornada que eu percebi o maior erro do ensino tradicional: o foco excessivo em escalas, como
                se elas tivessem vida própria. Eu descobri que faltava algo essencial. Faltava o mapa da música, o
                domínio do ritmo e a capacidade de me expressar de verdade.
              </p>

              <p className="text-lg font-semibold text-foreground">
                A minha jornada mudou quando eu descobri o método que me ensinou a pensar como um improvisador, não como
                um "tocador de notas".
              </p>

              <p className="text-lg">
                E, em pouco tempo, ele me tirou da frustração de tocar sozinho e me levou aos palcos, tocando com
                músicos que ganharam Grammy.
              </p>

              <p className="text-lg font-bold text-foreground">
                Eu não quero que você passe pelas mesmas frustrações que eu.
              </p>

              <p className="text-lg">Por isso, criei a Academia de Improvisação.</p>

              <p className="text-xl font-bold text-center text-foreground mt-8">
                Este não é um curso. É a síntese de toda a minha jornada.
              </p>

              <p className="text-lg text-center">
                O método exato que me deu liberdade, e que vai te dar o atalho para você superar a insegurança e,
                finalmente, se tornar o músico que você sempre sonhou em ser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
