using Library;
using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {   
        }

        [Test]
        public void Test1()
        {
            var message = Class1.GetHelloWorld();
            Assert.AreEqual("HelloWorld", message);
        }
    }
}